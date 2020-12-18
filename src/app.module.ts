import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { CatsModule } from './cats/cats.module';
import { AuthorsModule } from './authors/authors.module';
import { join } from 'path';

@Module({
	
	imports: [
		CatsModule,
		GraphQLModule.forRoot({
			typePaths: ['./**/*.graphql'],
		})
	]
	
	
	// imports: [
	// 	GraphQLModule.forRoot({
	// 		// 將編譯過後的 Schema 寫入 src/schema.gql
	// 		autoSchemaFile: join(process.cwd(), 'src/schema.gql')
	// 	}),
	// 	AuthorsModule
	// ]

// GraphQL use Schema first
// imports: [
//   CatsModule,
//   GraphQLModule.forRoot({
//     typePaths: ['./**/*.graphql']
//   }),
//   AuthorsModule,
// ]
})
export class AppModule {}
