import { ArrowLeft } from "phosphor-react";
import { feedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenshotButton } from "../ScreenshotButton";
import { useState } from "react";

interface FeedbackContentStepProps {
  feedbackType: feedbackType;
  onFeedbackRestartRequested: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onFeedbackRestartRequested,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);

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
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"
          placeholder="Conte com detalhes o que esta acontecendo..."
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />
          <button
            type="submit"
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-all"
          >
            Enviar Feedback
          </button>
        </footer>
      </form>
    </>
  );
}
