import { Posts } from '../types/interfaces/posts.interfaces';

export class PostsMapper {
  public static mapContractResponseToPosts(contractPosts: any[]): Posts[] {
    return contractPosts.map((post) => this.contractFormated(post));
  }

  private static contractFormated(contractPost: any): Posts {
    return {
      id: Number(contractPost[0]),
      title: contractPost[1],
      description: contractPost[2],
      author: contractPost[3],
      timestamp: Number(contractPost[4]),
      likes: contractPost[5],
      isRead: contractPost[6],
    };
  }
}
