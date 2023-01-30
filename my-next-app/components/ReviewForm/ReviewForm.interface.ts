export interface IReviewForm {
    UserName: string;
    CommentTitle:string;
    CommentDescription:string;
    rating:number;
}

export interface IReviewSendResponse {
    message: string;
}
