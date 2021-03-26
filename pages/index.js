import { Box, SimpleGrid } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

import Infos from "../components/info-section/infos";
import Upload from "../components/upload/upload";

import { getChangelog } from "../utils/changelog";

export async function getStaticProps() {
  const data = await getChangelog();
  return {
    props: {
      logs: data.content,
      version: process.env.VERSION,
      texts: {
        subject: "Invoice Printer",
        description: "Automatic Invoice Printer by parsed. .XLSX or .CSV file.",
        howto: "How does it work ?",
        steps: {
          first: "Set your company information (Name, Adress, Phone etc.)",
          second: "Upload your .XLSX or .CSV file",
          third: "Select one of the parsed items",
          fourth: "Edit your invoice and print it! (Everything is editable)"
        },
        drawer: {
          subject: "Set your company information",
          description: "Please fill correctly this form for best experience",
          form: {
            companyname: "Company Name:",
            companyslogan: "Company Slogan:",
            companylocation: "Company Location:",
            companyadress: "Company Adress:",
            companyownername: "Company Owner Name:",
            companyphonenumber: "Company Phone Number:",
            companyemail: "Company Email:",
            companydomainname: "Company Domain Name:",
            invoicedescription: "Invoice Description:",
            tax: "Tax (%):"
          }
        },
        uploadlayer: "You can drag your file to this box for parsing your file.",
      }
    },
  };
}

export default function Home({ logs, version, texts }) {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <>
      <Box height="8px" background="#107c41"></Box>
      <SimpleGrid columns={isTablet ? 1 : 2}>
        <Infos texts={texts} version={version} logs={logs} />
        <Upload texts={texts} />
      </SimpleGrid>
    </>
  );
}
