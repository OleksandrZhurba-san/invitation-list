import styles from "./styles.module.css";

function InvitedCard({ id, name, onClick }) {
  return (
    <div className={styles.card_wrapper}>
      <p>id: {id}</p>
      <p>name: {name}</p>
      <button className={styles.remove_button} onClick={onClick}>
        remove
      </button>
    </div>
  );
}
export default InvitedCard;
