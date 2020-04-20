interface CarouselState {
  offset: number;
  desired: number;
  active: number;
}

interface CarouselNextAction {
  type: 'next';
  length: number;
}

interface CarouselPrevAction {
  type: 'prev';
  length: number;
}

interface CarouselJumpAction {
  type: 'jump';
  desired: number;
}

interface CarouselDoneAction {
  type: 'done';
}

interface CarouselDragAction {
  type: 'drag';
  offset: number;
}

type CarouselAction =
  | CarouselJumpAction
  | CarouselNextAction
  | CarouselPrevAction
  | CarouselDragAction
  | CarouselDoneAction;

export { CarouselAction, CarouselState }
