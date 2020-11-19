import { GetStaticPaths, GetStaticProps } from "next";


export const getStaticProps: GetStaticProps<{}> = async context => {
	console.log('ISR', context.params)

	return {
		props: {
			id: context.params.id
		},
		revalidate: 10
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	console.log('ISR')

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
