import BlockA from "../block/BlockA";
import BlockB from "../block/BlockB";

const blockObject = {
  block_a: BlockA,
  block_b: BlockB,
};

const Homepage = (props) => {
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

export default Homepage;
