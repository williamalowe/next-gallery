import Modal from "@/components/modal";
import Image from "next/image";

export default function ImageModal({ params }: { params: { id: string } }) {
  return (
    <Modal>
      <Image
        src={`/images/${params.id}.jpg`}
        alt={`image ${params.id}`}
        className="max-h-[90vh] w-auto"
        width={800}
        height={800}
        priority={true}
      />
    </Modal>
  );
}
