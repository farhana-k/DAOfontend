export default function Proposals(props) {
    if(props.data != ''){
        return (
            <div>
                <h1>{props.data}</h1>
            </div>
          );
    }
}