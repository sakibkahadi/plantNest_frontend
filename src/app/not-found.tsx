import Link from "next/link";
import styles from "../styles/notFound.module.css";
export default function NotFound() {
  return (
    <div className="border flex justify-center items-center h-screen w-full ">
      <div className="">
        <h1 className={styles.heading}>404</h1>
        <h2 className={styles.subHeading}>Page not found</h2>
        <div className="text-center mt-10 md:mt-14 lg:mt-20">
          <button className={styles.notFoundButton}>
            {" "}
            <span>
              <Link href="/">Go Back</Link>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
