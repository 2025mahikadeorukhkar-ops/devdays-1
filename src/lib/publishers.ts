/*
 * Provides build-time data-access helpers for publisher records.
 */
import { asc } from 'drizzle-orm';
import type { Database } from './db';
import { publishers } from '../../db/schema';

export type PublisherSummary = Pick<typeof publishers.$inferSelect, 'id' | 'name'>;

/** All publishers ordered by name. */
export async function getAllPublishers(db: Database): Promise<PublisherSummary[]> {
    return db
        .select({ id: publishers.id, name: publishers.name })
        .from(publishers)
        .orderBy(asc(publishers.name));
}