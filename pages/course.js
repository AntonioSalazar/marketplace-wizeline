import { Curriculum, Keypoints, Hero } from "@components/course"
import { Modal } from '@components/common'
import { Layout } from "@components/layout";

const Course = () => {
  return (
    <Layout>
      <div className="py-4">
        <Hero />
      </div>
        <Keypoints />
        <Curriculum />
        <Modal />
    </Layout>
  )
}

export default Course;