import "./ModalImage.css";
import { IoClose } from "react-icons/io5";

interface IModalImageProps {
  image: string;
  setOpenModal: (open: boolean) => void;
}

export const ModalImage = ({ image, setOpenModal }: IModalImageProps) => {
  return (
    <section
      className="container-modal-image"
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
