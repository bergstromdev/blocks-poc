import { BlockRenderer } from "./Components/ContentBlocks/BlockRenderer";
import { Hero } from "./Components/Hero";
import { data } from "./data";

function App() {
  return (
    <div>
      <Hero />
      {data.blocks.map((block, index) => (
        <BlockRenderer
          key={block.id}
          variant={block.variant}
          block={block.content}
        />
      ))}
    </div>
  );
}

export default App;
