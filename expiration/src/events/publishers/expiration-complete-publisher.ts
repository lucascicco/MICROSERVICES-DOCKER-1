import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@lctickets20/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
