import HadithSourceForm from "./HadithSourceForm/HadithSourceForm";
import HadithContainer from "./HaidithContainer";

function HadithHarvestContainer() {
    return (
        <div className="flex flex-col items-center">
            <HadithSourceForm />
            <HadithContainer />
        </div>
    );
}

export default HadithHarvestContainer;
