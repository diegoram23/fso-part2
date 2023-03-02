const Notification = ({ successMessage, errMessage }) => {
    if (successMessage !== null) {
        return (
            <div className="success-message"> {successMessage}</div>
        )
    }

    if (errMessage !== null) {
        return (
            <div className="error-message"> {errMessage}</div>
        )
    }

}

export default Notification