import { Publisher, OrderCreatedEvent, Subjects } from '@lctickets20/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
