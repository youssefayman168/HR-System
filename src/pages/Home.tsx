import Modal from "@/components/Modal";
import BaseLayout from "../layouts/BaseLayout/BaseLayout";

const Home = () => {
  return (
    <BaseLayout>
      <Modal
        type='success'
        title='Add'
        subtitle='subtitle'
        showCancel
        showOptions={false}
        mainOptionTitle='Ok'
        onMainOptionClick={() => console.log("first")}
        onCancel={() => console.log("first")}
      />
    </BaseLayout>
  );
};

export default Home;
