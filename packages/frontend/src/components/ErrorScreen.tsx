import styles from "./ErrorScreen.module.scss";

export const ErrorScreen = () => {
    return (
        <div className={styles.errorSceenLayout}>
            <h2>There was an error. Try again later</h2>
        </div>
    )
}