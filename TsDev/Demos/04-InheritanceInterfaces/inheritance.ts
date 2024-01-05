abstract class Review {

    constructor(protected _score: number) {}
    
    public get score() {
        return this._score;
    }
    
    toString() {
        return `Score: ${this._score}`;
    }
} 

class BriefReview extends Review {

    constructor(score: number, private comment: string) {
        super(score);
    }
    
    toString() {
        return `Brief review: ${super.toString()}, comment: ${this.comment}`;
    }
}

class CriticalReview extends Review {

    private observations: string[];
    
    constructor(score: number, private mediaOutlet: string, ...observations: string[]) {
        super(score);
        this.observations = observations;
    }

    get numObservations() {
        return this.observations.length;
    }        

    toString() {
        return `Critical review: ${super.toString()}, media outlet: ${this.mediaOutlet}, observations: ${this.observations.join(",")}`;
    }
}

class Film {

    private static nextId: number = 0;

    private id: number;
    private genres: string[] = [];
    private reviews: Review[] = [];
  
    constructor(
        private title: string,
        private blurb: string,
        private price: number) {
    
        this.id = Film.nextId++;
    }
  
    addGenres(...genres: string[]) {
        for (let genre of genres) {
          this.genres.push(genre);
        }
    }
  
    review(review: Review) {
        this.reviews.push(review);
    }
  
    get genresAsString() {
        return this.genres.join(' ');
    }
  
    get reviewsAsString() {
        let str: string = '';
        for (let review of this.reviews) {
            str += review.toString() + '\n';
        }
        return str;
    }
  
    get averageScore() {
        let total: number = 0;
        for (let review of this.reviews) {
            total += review.score;
        }
        return total / this.reviews.length;
    }
  
    toString() {
        return `[${this.id}] ${this.title}, ${this.blurb}, £${this.price}, [genres ${this.genresAsString}], [ratings ${this.reviewsAsString}], average score ${this.averageScore}`;    
    }    
}

// Client code.
let film: Film = new Film(
    'Spectre', 
    'Bond is back in a frantic battle against his classic foe and his white cat', 
    8.99);
    
film.review(new BriefReview(5, 'Great film'));
film.review(new CriticalReview(4, 'Daily Mail', 'Great action sequences', 'Daniel Craig looking a bit old now'));
film.review(new CriticalReview(5, 'The Sun', 'Nice cat', 'Great scenery'));
film.review(new BriefReview(3, 'I prefer Bourne'));
console.log(film.reviewsAsString);

processReview(new BriefReview(5, 'Great film'));
processReview(new CriticalReview(5, 'The Sun', 'Nice cat', 'Great scenery'));

function processReview(review : Review) {

    if (review instanceof CriticalReview) {
        
        let criticalReviewA = review as CriticalReview;  
        console.log(`Critical review, ${criticalReviewA.numObservations} observations`);

        let criticalReviewB = <CriticalReview> review;
        console.log(`Critical review, ${criticalReviewB.numObservations} observations`);
    }
    else {
        console.log('Brief review, no observations');
    }
}