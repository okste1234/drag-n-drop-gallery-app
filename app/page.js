import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import PrivateConsumer from "./routes/PrivateConsumer";

export default function Home() {
  return (
    <PrivateConsumer>
      <div className="max-w-[1600px] m-auto">
        <nav>
          <Navbar />
        </nav>

        <section>
          <Upload />
        </section>

        <section>
          <Gallery />
        </section>

      </div>
    </PrivateConsumer>
  )
}
