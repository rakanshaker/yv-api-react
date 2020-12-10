import { Image, ContainerImage } from "./Styles";

function CardImage(props) {
  const { img, onImageError } = props;
  return (
    <ContainerImage>
      <Image src={img} onError={onImageError} alt="Experience image"></Image>
    </ContainerImage>
  );
}

export default CardImage;
