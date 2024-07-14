import dynamic from "next/dynamic";
import Image, { type StaticImageData } from "next/image";
import { useState, type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import styles from "./screenshot.module.css";

type Props = ComponentProps<typeof Image>;

export function Screenshot({ className, ...rest }: Props) {
  const previewSrcObj: StaticImageData = rest?.src as StaticImageData;
  const Viewer = dynamic(() => import("react-viewer"), { ssr: false });
  const [visible, setVisible] = useState<boolean>();
  return (
    <div
      className={styles["screenshot-container"]}
      onClick={() => {
        setVisible(true);
      }}
    >
      <Image
        className={twMerge(className, "rounded-md shadow-md")}
        {...rest}
        alt={rest?.alt || ""}
      />

      {/* 遮罩 */}
      <Viewer
        className="ge-jin-screenshot-preview"
        visible={visible}
        noClose={true}
        onMaskClick={() => {
          setVisible(false);
        }}
        rotatable={false}
        scalable={false}
        zoomSpeed={0.15}
        noNavbar={true}
        minScale={1}
        showTotal={false}
        images={[{ src: previewSrcObj?.src, alt: "" }]}
      />
    </div>
  );
}
