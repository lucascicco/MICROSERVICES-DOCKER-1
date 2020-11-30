import { Publisher, Subjects, TicketUpdatedEvent } from '@lctickets20/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
