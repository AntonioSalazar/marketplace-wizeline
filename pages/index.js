import { Hero } from '@components/common';
import { List } from '@components/course';
import { Layout } from '@components/layout';
import { getAllCourses } from '@content/courses/fetcher';

export default function Home({courses}) {
  return (
    <Layout>
      <Hero />
      <List courses={courses}/>
    </Layout>
  )
}

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}