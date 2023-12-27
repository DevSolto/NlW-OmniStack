import successImageUrl from "../../../assets/success.svg";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccessStepProps {
  handleRestartFeedbackSend: () => void;
  handleRestartFeedback: () => void;
}

export function FeedbackSuccessStep({
  handleRestartFeedbackSend,
  handleRestartFeedback,
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center content-center gap-4 my-10">
        <img
          src={successImageUrl}
          alt="Icone de sucesso"
          className="w-10 h-10"
        />
        <span className="text-xl">Agradecemos o feedback!</span>
        <button
          onClick={() => {
            handleRestartFeedbackSend();
            handleRestartFeedback();
          }}
          className="bg-zinc-800 py-2 px-4 rounded-md"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  );
}
