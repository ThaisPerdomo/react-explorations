type Props = {
    titulo: string;
}

export const Header = ({titulo}: Props) => {
    return (
      <div>
        <h1>{titulo}</h1>
        <hr/><br/>
      </div>
    );
};