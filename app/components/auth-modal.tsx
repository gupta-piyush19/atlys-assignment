import { Modal } from "./common/modal";
import { AuthForm } from "./auth-form";

interface AuthModalProps {
  type: "signin" | "signup";
  onClose: () => void;
  onSwitchType: (type: "signin" | "signup") => void;
}

export const AuthModal = ({ type, onClose, onSwitchType }: AuthModalProps) => {
  const onSuccess = () => {
    onClose();
  };

  return (
    <Modal isOpen={true} onClose={onClose} key={type}>
      <AuthForm type={type} onSwitchType={onSwitchType} onSuccess={onSuccess} />
    </Modal>
  );
};
