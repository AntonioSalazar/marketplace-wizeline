import { Hero } from '@components/ui/common';
import { List } from '@components/ui/course';
import { Layout } from '@components/ui/layout';
import { getAllCourses } from '@content/courses/fetcher';

export default function Home({courses}) {
  return (
    <>
      <Hero />
      <List courses={courses}/>
    </>
  )
}

Home.Layout = Layout

export function getStaticProps() {
  const { data } = getAllCourses()
  return {
    props: {
      courses: data
    }
  }
}