import { Subjects, Publisher, PaymentCreatedEvent } from '@lctickets20/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
