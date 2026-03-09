import "./ModalImage.css";
import { IoClose } from "react-icons/io5";

interface IModalImageProps {
  image: string;
  isMobile: boolean | undefined
  setOpenModal: (open: boolean) => void;
}

export const ModalImage = ({ image, isMobile, setOpenModal }: IModalImageProps) => {
  return (
    <section
      className={`container-modal-image ${isMobile && 'container-modal-image-mobile'}`}
      onClick={() => setOpenModal(false)} //clique fora fecha
    >
      <div
        className="content-modal-image"
        onClick={(e) => e.stopPropagation()} //evita fechar ao clicar na imagem
      >
        <img src={image} />
      </div>
      <span
        className="content-modal-image-btn-close"
        onClick={() => setOpenModal(false)}
      >
        <IoClose size={35} />
      </span>
    </section>
  );
};
