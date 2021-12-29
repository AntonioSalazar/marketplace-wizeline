import { Curriculum, Keypoints, Hero } from "@components/ui/course"
import { Modal } from '@components/ui/common'
import { Layout } from "@components/ui/layout";
import { getAllCourses } from "@content/courses/fetcher";

const Course = ({course}) => {
  return (
    <>
      <div className="py-4">
        <Hero 
            title={course.title}
            description={course.description}
            image={course.coverImage}
        />
      </div>
        <Keypoints 
            points={course.wsl}
        />
        <Curriculum 
            locked={true}
        />
        <Modal />
    </>
  )
}

Course.Layout = Layout;

export function getStaticPaths() {
    const {data} = getAllCourses();

    return {
        paths: data.map(course => ({
            params: {
                slug: course.slug
            }
        })),
        fallback: false,
    }
}

export function getStaticProps({params}) {
    const { data } = getAllCourses()
    const course = data.filter(course => course.slug === params.slug)[0]
    return {
      props: {
        course
      }
    }
  }
export default Course;