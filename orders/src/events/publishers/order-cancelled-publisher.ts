import { Subjects, Publisher, OrderCancelledEvent } from '@lctickets20/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
