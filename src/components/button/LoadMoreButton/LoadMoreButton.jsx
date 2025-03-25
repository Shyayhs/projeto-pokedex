import Button from "../button";

export default function LoadMoreButton(props) {
    return (
        <Button value="Carregar Mais" onClick={() => props.addPokemons()}/>
    )
};