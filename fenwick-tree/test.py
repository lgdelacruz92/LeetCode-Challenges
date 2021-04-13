query = '''SELECT * FROM (
                    SELECT -COLUMNS-
                        FROM zyBookContentSections
                        JOIN CanonicalSections USING(canonical_section_id)
                        JOIN ContentResourceCanonicalSections USING(canonical_section_id)
                        JOIN ContentResources USING(content_resource_id)
                        JOIN ContentResourceTypes USING(resource_type_id)
                        WHERE zybook_id = %s
                        ORDER BY chapter_number, section_number, ordering) AS content_resource_references
                WHERE content_resource_reference IS NOT NULL ORDER BY section_number ASC
                '''
columns = [
            'CanonicalSections.guid AS canonical_section_guid',
            'ContentResources.caption AS caption',
            'ContentResources.guid AS content_resource_guid',
            'payload->>\'$.ref\' AS content_resource_reference',
            'payload->>\'$.html[*].guid\' AS sub_content_resource_guids',
            'payload->>\'$.html[*].ref\' AS sub_content_resource_refs',
            'payload->>\'$.html[*].enumid\' AS enumids',
            'zyBookContentSections.chapter_number',
            'zyBookContentSections.section_number AS section_number',
            'content_resource_id',
            'payload->>\'$.name\' AS name',
            'ContentResourceCanonicalSections.ordering']
query = query.replace('-COLUMNS-',',\n\t'.join(columns))
print(query)