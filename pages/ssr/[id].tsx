import { GetServerSideProps } from "next";

export const getServerSideProps: GetServerSideProps<{}> = async context => {
	console.log(context)

	return {
		props: {
			id: context.params.id
		}
	}
}

export default function PokemonPage(props: { id: string }) {
	return (
		<div>
			ID {props.id}
		</div>
	)
}
