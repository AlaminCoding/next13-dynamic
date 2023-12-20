import BlockC from "../block/BlockC";
import BlockD from "../block/BlockD";

const blockObject = {
  block_c: BlockC,
  block_d: BlockD,
};

const Basicpage = (props) => {
  const { body } = props.data;
  return (
    <>
      {body.map((block) => {
        const BlockComponent = blockObject[block.type];
        return (
          BlockComponent && (
            <BlockComponent
              key={block.id}
              data={block.value}
              compId={block.id}
            />
          )
        );
      })}
    </>
  );
};

export default Basicpage;
