type Props = {
  image: string;
  description: string;
};
const SwiperCard = ({ image, description }: Props) => {
  return (
    <div className="swiper-card-container">
      <div className="image-container">
        <img alt={`rented house or car images`} src={image} />
      </div>
      <div className="content-container">
        <span className="description">{description}</span>
      </div>
    </div>
  );
};

export default SwiperCard;
