import PropTypes from "prop-types";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";

const StyledImage = styled.img`
  display: block;
  width: 15rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
`;
function Image({ src, ...props }) {
  const [image, setImage] = useState(null);
  
  const { ref } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    onChange: (_, entry) => {
      if (entry.isIntersecting) {
        setImage(src);
      }
    },
  });
  return (
    <StyledImage
      src={image ?? "https://placehold.co/600x400"}
      {...props}
      ref={ref}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
};
export default Image;
