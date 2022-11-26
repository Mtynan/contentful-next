import { IContentfulTestFields } from "../src/@types/contentful";
import ContentService from  "../utils/contentful-service";

export async function getStaticProps() {
  const testData = (
    await ContentService.instance.getEntriesByType<IContentfulTestFields>(
      "contentfulTest"
    )
  ).map((entry) => entry.fields);

  return {
    props: {
      testData,
    },
  };
}

type Props = {
  testData: IContentfulTestFields[];
};

export default function Home({ testData }: Props) {
  return (
    <>
      {testData.map((data,i) => (
        <div key={i}>
          <h1>{data.testMessage}</h1>
          <h1>{data.testNumber}</h1>
        </div>
      ))}
    </>
  );
}
