import Modal from "@/components/Modal";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";
import { useState } from "react";

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <BaseLayout>
      <Modal
        type='success'
        title='Add'
        subtitle='subtitle'
        showCancel
        // showOptions
        mainOptionTitle='Ok'
        onMainOptionClick={() => console.log("first")}
        onCancel={() => setShowModal(false)}
        showModal={showModal}
      />
      <button onClick={() => setShowModal((prev) => !prev)}>Toggle</button>
    </BaseLayout>
  );
};

export default Home;
