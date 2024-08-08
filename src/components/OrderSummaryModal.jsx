import { Modal, Button, Toast } from "flowbite-react";
import { useCart } from "../context/CartContext";
import { SquareXIcon } from "./icons/SquareXIcon";
import { useState } from "react";

const OrderSummaryModal = ({ showModal, onClose }) => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showToast, setShowToast] = useState(false);

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleCancel = () => {
    clearCart();
    onClose();
  };

  const handleOrder = () => {
    clearCart();
    setShowToast(true);
    onClose();

    // Hide the toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <>
      {showToast && (
        <div className="fixed top-5 right-5">
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414L9 14.414 5.293 10.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3 text-sm font-normal text-white">
              La orden se realizó con éxito.
            </div>
            <Toast.Toggle />
          </Toast>
        </div>
      )}

      <Modal show={showModal} onClose={onClose}>
        <Modal.Header>Resumen del Pedido</Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>No hay cócteles en el carrito. Píde uno :)</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between place-content-center mb-4"
                >
                  <p className="text-pretty">{item.name}</p>
                  <p>x {item.quantity}</p>
                  <div className="flex gap-3 lg:gap-16">
                    <p>S/.{item.price * item.quantity}</p>
                    <SquareXIcon
                      className="text-red-500 hover:text-red-600 cursor-pointer hover:border hover:border-white hover:rounded-lg"
                      onClick={() => removeFromCart(item.name)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-4">
            <p className="font-bold">Total: S/.{totalAmount}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button color="failure" onClick={handleCancel}>
            Cancelar
          </Button>
          <Button onClick={handleOrder}>Ordenar</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OrderSummaryModal;
