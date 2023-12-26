import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps {
  feedbackType: feedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const feedbackInfo = feedbackTypes[feedbackType];
  return (
    <>
      <header className="flex items-center gap-2">
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={onFeedbackRestartRequested}
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>

        <img
          src={feedbackInfo.image.source}
          alt={feedbackInfo.image.alt}
          className="w-6 h-6"
        />
        <span className="text-xl leading-6">{feedbackInfo.title}</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full"></div>
    </>
  );
}
