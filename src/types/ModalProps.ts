export default interface ModalProps {
    body: String,
    title: String,
    show: boolean,
    setShow(b: boolean): void,
    setShowLogin?(b: boolean): void
}
function callback(): void {
    console.log("finished");
}

function async(name: string, callback: () => void): void {
    console.log(name)
    callback();
}
async("anthony", callback);