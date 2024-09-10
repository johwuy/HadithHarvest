import logo from "../../assets/wheat.svg";

function WheatLogo() {
    return (
        <img
            src={logo}
            draggable={false}
            height={32}
            width={32}
            className="m-1"
        />
    );
}

export default WheatLogo;
