export default interface ModalProps {
    body: String,
    title: String,
    show: boolean,
    setShow(b: boolean): void,
    setLoginShow?(b: boolean): void
}