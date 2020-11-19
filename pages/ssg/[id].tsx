import { GetStaticPaths, GetStaticProps } from "next";


export const getStaticProps: GetStaticProps<{}> = async context => {
	console.log('ssg fallback', context.params)

	return {
		props: {
			id: context.params.id
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	console.log('ssg fallback')

	return {
		paths: [],
		fallback: true
	}
}

export default function PokemonPage(props: { id: string }) {
	return (
		<div>
			<h1>SSG Fallback</h1>
			ID {props.id}
		</div>
	)
}
