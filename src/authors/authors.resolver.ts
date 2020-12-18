import { Resolver, Query, Args, ID } from '@nestjs/graphql';
import { Author } from './models/author.model';

@Resolver(of => Author)
export class AuthorsResolver {
	constructor(
	) {}
	
	@Query(returns => Author)
	async author(@Args('id', { type: () => ID }) id: string) {
		return {
			id: '1',
			lastName: "lastName",
			firstName: "firstName"
		};
	}
}
