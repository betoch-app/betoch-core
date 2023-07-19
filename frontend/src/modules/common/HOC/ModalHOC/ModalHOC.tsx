import { Icon } from "@iconify/react";
import { Modal } from "antd";
import { ReactNode } from "react";
import CloseIcon from "../../components/Icons/CloseIcon";

type Props = {
  isModalVisible: boolean;
  title: string;
  children: ReactNode;
  onCloseModal: () => void;
};
const ModalHOC = ({ isModalVisible, title, children, onCloseModal }: Props) => {
  return (
    <Modal
      closeIcon={
        <span onClick={onCloseModal}>
          <CloseIcon fillColor="black" />
        </span>
      }
      title={title}
      open={isModalVisible}
      footer={null}
    >
      {children}
    </Modal>
  );
};

export default ModalHOC;
